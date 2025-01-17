import brilliant from "/classifications/brilliant.png";
import great from "/classifications/great.png";
import blunder from "/classifications/blunder.png";
import mistake from "/classifications/mistake.png";
import missed from "/classifications/missed.png";
import good from "/classifications/good.png";
import book from "/classifications/book.png";
import best from "/classifications/best.png";
import Container from "../ui/Container";

interface ITimeLineData {
  id: string;
  content: string;
  icons: {
    main: string;
    sub: string[];
  };
  area: "a" | "b" | "c" | "d";
}

const TIME_LINE_DATA: ITimeLineData[] = [
  {
    id: "01",
    content: "العب واستمتع بتخصيصات الوقت كما تحب",
    icons: {
      main: brilliant,
      sub: [great, best],
    },
    area: "a",
  },
  {
    id: "02",
    content: "حلل مبارياتك بأحدث محرك تحليل لتحصل علي أعلى عمق تحليلي !!",
    icons: {
      main: great,
      sub: [book, best],
    },
    area: "b",
  },
  {
    id: "03",
    content: "تعلم من أخطائك التي قمت بها في مبارياتك ليعلو مستواك",
    icons: {
      main: blunder,
      sub: [mistake, missed],
    },
    area: "c",
  },
  {
    id: "04",
    content: "حل ألغاز لتطور مستواك التكتيكي لتزيد من تحليلك للمواقف في أدوارك",
    icons: {
      main: good,
      sub: [great, brilliant],
    },
    area: "d",
  },
] as const;

export default function Features() {
  return (
    <section className="mt-10">
      <Container className="flex flex-col items-center">
        {TIME_LINE_DATA.map((block, index) => {
          return <TimeLineBlock block={block} index={index} />;
        })}
      </Container>
    </section>
  );
}

interface TimeLineBlockProps {
  block: ITimeLineData;
  index: number;
}

function TimeLineBlock({ block, index }: TimeLineBlockProps) {
  return (
    <article className="relative min-h-[340px] my-6 grid-cols-1 md:grid-cols-2 w-full time-line-block">
      <div className="absolute right-1/2 top-0">
        <h2 className="text-7xl leading-[37px] font-bold text-slate-200 text-center">
          {block.id}
        </h2>
        <div className="h-[263px] w-0.5 from-green to-green bg-gradient-to-b absolute top-14 left-1/2"></div>
      </div>
      <div
        className="self-center flex justify-center items-center relative"
        style={{ gridArea: index % 2 === 0 ? "a" : "b" }}
      >
        <div className="w-[502px] flex justify-center items-center">
          <img
            src={block.icons.main}
            className="w-[270px] aspect-square opacity-50 "
            alt="main icon"
          />
          <h3 className="absolute text-slate-100 text-4xl top-1/2 text-center -translate-y-1/2 max-w-[502px]">
            {block.content}
          </h3>

          {block.icons.sub.map((icon, iconIndex) => {
            let styles = "w-14 absolute ";
            if (index % 2 === 0) {
              // even index number in the timeline "01" | "03" in timeline
              if (iconIndex === 0) {
                styles += "top-5 right-5";
              } else {
                styles += "left-5 bottom-5";
              }
            } else {
              // odd index number in the timeline "02" | "04" in timeline
              if (iconIndex === 0) {
                styles += "bottom-5 right-20";
              } else {
                styles += "left-5 top-5";
              }
            }
            return <img src={icon} alt="sub icon" className={styles} />;
          })}
        </div>
      </div>
    </article>
  );
}
