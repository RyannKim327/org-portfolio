interface inputProps extends React.InputHTMLAttributes<unknown> {
  label: string
}

export function Input({ label, className, required, ...rest }: inputProps) {

  return (
    <div className="flex flex-col flex-1">
      <span className="pl-3">{label} <span className="text-red-500">{required ? "*" : ""}</span></span>
      <input
        {...rest}
        className={`${className ?? ""} p-2 bg-card-bg border border-solid border-card-border hover:border-brand focus:border-brand text-white outline-none rounded-lg transition-all ease-in-out delay-75`}
      />
    </div>
  )
}
