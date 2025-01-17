import Container from "../ui/Container";
import hero from "/hero.png";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="hero-bg">
        <img
          src={hero}
          alt="hero-img"
          className="w-full h-[100vh] object-cover"
        />
        <div className="bg-overlay w-full h-full absolute inset-0 opacity-[44%]"></div>
      </div>
      <div className="absolute top-1/2 right-1/2  translate-x-1/2 -translate-y-1/2 w-full">
        <Container>
          <h1 className="text-slate-100 text-[80px] text-center">
            هل أنت جاهز لحسم المعركة؟
          </h1>
          <p className="text-3xl text-slate-200 text-center">
            لا مجال للتردد. خطط بذكاء، حرك جيشك، وأثبت أنك{" "}
            <span className="text-red font-medium">القائد</span> الذي لا يُهزم!
          </p>
          <div className="flex justify-center mt-4 gap-2">
            <Button variant={"blue"} size={"lg"}>
              إبدأ الحرب الآن
            </Button>
            <Button variant={"smoke"} size={"lg"}>
              حلل مبارياتك الآن
            </Button>
          </div>
          <div className="flex justify-center items-center gap-5 mt-5">
            <p className="text-slate-200">عدد المستخدمون النشطون: <span className="font-bold">1000</span>+</p>
            <p className="text-slate-200">عدد المباريات التي لعبت اليوم: <span className="font-bold">5000</span>+</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
