import DollarIcon from "../assets/icon-dollar.svg";
import PersonIcon from "../assets/icon-person.svg";
import InputWrapper from "./InputWrapper";
import Input from "./Input";
import TagWrapper from "./TagWrapper";
import Tag from "./Tag";
import CustomTag from "./CustomTag";

export default function InputModal({
  bill,
  no,
  tip,
  showInput,
  onBillChange,
  onNoChange,
  onTipSelect,
  onTipChange,
  onShowInput,
}) {
  return (
    <form>
      <InputWrapper label="Bill" input={bill}>
        <Input
          icon={DollarIcon}
          alt="Dollar icon"
          input={bill}
          onChange={onBillChange}
        />
      </InputWrapper>

      <TagWrapper>
        <Tag percent={5} tip={tip} onClick={() => onTipSelect(5)} />
        <Tag percent={10} tip={tip} onClick={() => onTipSelect(10)} />
        <Tag percent={15} tip={tip} onClick={() => onTipSelect(15)} />
        <Tag percent={25} tip={tip} onClick={() => onTipSelect(25)} />
        <Tag percent={50} tip={tip} onClick={() => onTipSelect(50)} />
        <CustomTag
          showInput={showInput}
          onShowInput={onShowInput}
          onTipChange={onTipChange}
        />
      </TagWrapper>

      <InputWrapper label="Number of People" input={no}>
        <Input
          icon={PersonIcon}
          alt="Person icon"
          input={no}
          onChange={onNoChange}
        />
      </InputWrapper>
    </form>
  );
}
