import Container from "@nago/components/container";
import {Image} from "@nago/components/Image";

export function FooterSection() {
  return <footer className="bg-primary text-white min-h-[225px] flex items-center justify-center">
    <Container className="px-[112px]">
      <div className="flex flex-row gap-10">
        <div className="flex items-center -mt-[20px]">
          <div className="relative w-[169px] h-[56px]">
            <Image
              fill
              className="h-full w-full object-cover"
              src="http://nadi_next.home/app/uploads/2024/04/钠谛-logo-彩白-1.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex flex-col grow gap-4 pt-[40px]">
          <div className="flex flex-row justify-between">
            <div>地址：北京市大兴区经济开发区科苑路18号1幢A3</div>
            <div>|</div>
            <div>电话：010-60219652</div>
            <div>|</div>
            <div className="relative">
              <div className="absolute w-[80px] h-[80px] -top-[92px] right-0">
                <Image className="text-right" fill src="/qrcode.webp" alt="qrcode"/>
              </div>
              邮箱：PR@energynadi.com
            </div>
          </div>
          <div className="border-dotted border-[1px] border-[#03338f]"></div>
          <div className="flex justify-center">
            Copyright © 2024 Nadi-Tech. All Rights Reserved.
          </div>
        </div>
      </div>
    </Container>
  </footer>
}