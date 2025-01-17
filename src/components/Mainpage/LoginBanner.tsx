import { Button } from "../ui/button";
import Container from "../ui/Container";
import brilliant from "/classifications/brilliant.png";
import great from "/classifications/great.png";

export default function LoginBanner() {
  return (
    <section>
      <Container className="bg-dark-blue rounded-[60px] relative">
        <div className="flex justify-between items-center py-[42px] px-[62px]">
          <img
            src={brilliant}
            alt="brilliant"
            className="w-[277px] aspect-square opacity-50"
          />
          <img
            className="w-[277px] aspect-square opacity-50"
            src={great}
            alt="great"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 text-center w-full -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">
          <h2 className="text-slate-200 text-[45px]">
            سجل دخولك الآن واستمتع بتجربة شطرنجيه ممتعه
          </h2>
          <Button variant={"lightBlue"} size={"lg"} className="w-fit mx-auto">تسجيل الدخول</Button>
        </div>
      </Container>
    </section>
  );
}
