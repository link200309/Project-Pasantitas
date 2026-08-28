interface Props {
  title: string;
  description?: string;
}

export function AppNavbar({ title, description }: Props) {
  return (
    <aside className="w-fill sticky top-2 z-10 bg-card p-3 rounded-md mb-5 border border-border space-y-1">
      <p className="text-section-title font-bold">{title}</p>
      <p className="text-caption font-light text-muted-foreground">
        {description}
      </p>
    </aside>
  );
}
