import {cn} from "@nago/utils/ui";


// @ts-ignore
export default function Container(props) {
  const { title, subtitle, children, separator, paddingY = "py-0", paddingX =  'px-0', className } = props;
  return (
    <div className={cn("container mx-auto", paddingX, className)}>
      <div className={cn('h-full font', paddingY)}>
        { title && <h1 className="text-[38px] font-bold text-c04338F font-arialNB">{title}</h1>}
        { subtitle && <h2 className="text-[38px] font-bold font-hmBLK">{subtitle}</h2>}
        { separator && <hr className="mt-[36px] mb-[60px] h-[5px] w-[70px] bg-[#03338f]" />}
        {children}
      </div>
    </div>
  );
}