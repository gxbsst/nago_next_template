export default function SolutionItem(props: any) {
  const { bg, title, subtitle, content } = props;
  const contentHTML = {
    __html: content,
  };
  return (
    <div
      className="min-h-[300px] relative w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="solution-outer min-h-[400px] flex -top-[44px] xl:left-[42px] xl:w-[226px] absolute">
        <div className="solution-inner group bg-gradient-to-b from-custom-blue-start to-[#002147] pt-[170px] px-[10px] xl:min-w-[225px]">
          <h2 className="text-white group-hover:text-[#03338F] font-hmBLK text-[21px]">
            {title}
          </h2>
          <h3 className="text-[#59bfe5] group-hover:text-[#002147] text-[10px] font-arial m-t-[9px] m-b-[6px]">
            {subtitle}
          </h3>
          <hr className="mt-[15px] mb-[28px]  w-[46px] border-t-[2px] border-[#4fb7e2] group-hover:border-[#03338F]" />
          <div
            className="text-white font-hm text-xs leading-7 group-hover:text-[#002147]"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
}