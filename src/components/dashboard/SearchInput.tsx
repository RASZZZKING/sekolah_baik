import {
  CaretLeft,
  MagnifyingGlass,
  Sliders,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface SearchInputProps {}

const SearchInput: FunctionComponent<SearchInputProps> = () => {
  return (
    <div className="rounded-2xl flex justify-between gap-3 bg-white p-3 px-6 items-center">
      <CaretLeft size={16} weight="bold" />
      <input
        type="text"
        placeholder="Find for learn or exam..."
        className=" outline-none text-sm flex-1"
      />
      <MagnifyingGlass size={16} weight="bold" />

      <div className="rounded-full bg-primary rotate-90 text-white p-1">
        <Sliders size={16} color="#f5f5f5" />
      </div>
    </div>
  );
};

export default SearchInput;
