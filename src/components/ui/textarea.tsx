interface textareaProps extends React.TextareaHTMLAttributes<unknown> {
  label: string
}

export function Textarea({ label, className, required, ...rest }: textareaProps) {
  return (
    <div className="flex flex-col flex-1">
      <span className="pl-3">{label} <span className="text-red-500">{required ? "*" : ""}</span></span>
      <textarea
        {...rest}
        className={`${className ?? ""} p-2 bg-card-bg border border-solid border-card-border hover:border-brand focus:border-brand text-white outline-none rounded-lg transition-all eas-in-out delay-75`}
      ></textarea>
    </div>
  )
}
