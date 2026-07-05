interface textareaProps extends React.TextareaHTMLAttributes<unknown> {
  label: string
}

export function Textarea(props: textareaProps) {
  return (
    <div className="flex flex-col flex-1">
      <span className="pl-3">{props.label} <span className="text-red-500">{props.required ? "*" : ""}</span></span>
      <textarea
        {...props}
        className={`${props.className ?? ""} p-2 bg-card-bg border border-solid border-card-border hover:border-brand focus:border-brand text-white outline-none rounded-lg transition-all eas-in-out delay-75`}
      ></textarea>
    </div>
  )
}
