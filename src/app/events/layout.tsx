export default function EventsLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <section
      className="flex flex-row relative min-h-screen w-full items-start justify-start overflow-hidden pt-22"
    >
      {children}
    </section>
  )
}
