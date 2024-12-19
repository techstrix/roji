export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Roji. All rights reserved.
      </div>
    </footer>
  );
}