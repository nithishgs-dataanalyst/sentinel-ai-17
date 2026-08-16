import { ArrowDown, ArrowUp, ChevronsUpDown, Search, X } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import { EmptyState, TableSkeleton } from "@/components/common/States";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  /** Value used for sorting and global search. */
  value?: (row: T) => string | number;
  render?: (row: T) => ReactNode;
  className?: string;
  sortable?: boolean;
}

export interface FilterDef<T> {
  key: string;
  label: string;
  options: string[];
  match: (row: T, value: string) => boolean;
}

interface DataTableProps<T> {
  rows: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string;
  loading?: boolean;
  searchPlaceholder?: string;
  filters?: FilterDef<T>[];
  pageSize?: number;
  onRowClick?: (row: T) => void;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: ReactNode;
  toolbarExtra?: ReactNode;
}

export function DataTable<T>({
  rows,
  columns,
  rowKey,
  loading = false,
  searchPlaceholder = "Search…",
  filters = [],
  pageSize = 10,
  onRowClick,
  emptyTitle = "No results found",
  emptyDescription = "Try changing your filters or run a new discovery.",
  emptyAction,
  toolbarExtra,
}: DataTableProps<T>) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Record<string, string>>({});
  const [sort, setSort] = useState<{ key: string; dir: "asc" | "desc" } | null>(null);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = rows.filter((row) => {
      if (q) {
        const hay = columns
          .map((c) => (c.value ? String(c.value(row)) : ""))
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      for (const f of filters) {
        const v = active[f.key];
        if (v && v !== "__all" && !f.match(row, v)) return false;
      }
      return true;
    });

    if (sort) {
      const col = columns.find((c) => c.key === sort.key);
      if (col?.value) {
        out = [...out].sort((a, b) => {
          const av = col.value!(a);
          const bv = col.value!(b);
          const cmp =
            typeof av === "number" && typeof bv === "number"
              ? av - bv
              : String(av).localeCompare(String(bv));
          return sort.dir === "asc" ? cmp : -cmp;
        });
      }
    }
    return out;
  }, [rows, columns, filters, query, active, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pageCount - 1);
  const visible = filtered.slice(current * pageSize, current * pageSize + pageSize);
  const hasFilters = query !== "" || Object.values(active).some((v) => v && v !== "__all");

  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
        <div className="relative min-w-[200px] flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
            placeholder={searchPlaceholder}
            className="h-9 bg-background pl-8"
          />
        </div>
        {filters.map((f) => (
          <Select
            key={f.key}
            value={active[f.key] ?? "__all"}
            onValueChange={(v) => {
              setActive((p) => ({ ...p, [f.key]: v }));
              setPage(0);
            }}
          >
            <SelectTrigger className="h-9 w-auto min-w-[150px] bg-background text-xs">
              <SelectValue placeholder={f.label} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="__all">All {f.label}</SelectItem>
              {f.options.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("");
              setActive({});
              setPage(0);
            }}
          >
            <X className="size-3.5" /> Clear
          </Button>
        )}
        {toolbarExtra}
      </div>

      {loading ? (
        <TableSkeleton rows={pageSize > 6 ? 6 : pageSize} cols={columns.length} />
      ) : visible.length === 0 ? (
        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
          action={emptyAction}
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-border bg-surface/60">
                {columns.map((c) => {
                  const sortable = c.sortable !== false && !!c.value;
                  const isActive = sort?.key === c.key;
                  return (
                    <th
                      key={c.key}
                      className={cn(
                        "px-4 py-2.5 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase",
                        c.className,
                      )}
                    >
                      {sortable ? (
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                          onClick={() =>
                            setSort((prev) =>
                              prev?.key === c.key
                                ? { key: c.key, dir: prev.dir === "asc" ? "desc" : "asc" }
                                : { key: c.key, dir: "asc" },
                            )
                          }
                        >
                          {c.header}
                          {isActive ? (
                            sort!.dir === "asc" ? (
                              <ArrowUp className="size-3" />
                            ) : (
                              <ArrowDown className="size-3" />
                            )
                          ) : (
                            <ChevronsUpDown className="size-3 opacity-40" />
                          )}
                        </button>
                      ) : (
                        c.header
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((row) => (
                <tr
                  key={rowKey(row)}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  className={cn(
                    "transition-colors",
                    onRowClick && "cursor-pointer hover:bg-surface-raised/60",
                  )}
                >
                  {columns.map((c) => (
                    <td
                      key={c.key}
                      className={cn("px-4 py-3 align-middle text-foreground", c.className)}
                    >
                      {c.render ? c.render(row) : c.value ? String(c.value(row)) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && filtered.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 text-xs text-muted-foreground">
          <span className="tabular">
            Showing {current * pageSize + 1}–
            {Math.min(filtered.length, (current + 1) * pageSize)} of {filtered.length}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={current === 0}
              onClick={() => setPage(current - 1)}
            >
              Previous
            </Button>
            <span className="tabular">
              Page {current + 1} / {pageCount}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={current >= pageCount - 1}
              onClick={() => setPage(current + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
