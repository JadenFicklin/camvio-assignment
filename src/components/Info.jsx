export const Info = (props) => {
  const { Icon, title, subTitle, children } = props

  return (
    <div className='h-full flex flex-col items-center justify-center gap-6'>
      <Icon className='size-32' strokeWidth={0.5} />
      <div className='flex flex-col items-center'>
        <p className='text-5xl font-thin'>{title}</p>
        <p className='py-3 mb-7 font-bold'>{subTitle}</p>
      </div>
      {children}
    </div>
  )
}
