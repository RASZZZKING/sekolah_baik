import {
  ArrowBendUpRight,
  CaretLeft,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface SearchInputLessonProps {}

const SearchInputLesson: FunctionComponent<SearchInputLessonProps> = () => {
  return (
    <div className="px-6">
      <label className="input input-bordered rounded-2xl flex items-center gap-3">
        <CaretLeft size={16} />
        <input type="text" className="grow" placeholder="Find for learn or exam" />
        <MagnifyingGlass size={20} />
        <div className="w-0.5 h-full bg-slate-300"></div>
        <div className="h-8 aspect-square bg-primary rounded-xl flex justify-center items-center">
          <ArrowBendUpRight size={16} weight="fill" color="#f5f5f5" />
        </div>
      </label>
    </div>
  );
};

export default SearchInputLesson;
