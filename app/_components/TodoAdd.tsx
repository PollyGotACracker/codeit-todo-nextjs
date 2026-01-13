import { HOME_TEXT } from "@/constants/messages";
import PlusSvg from '@/icons/plus.svg';
import Input from "@/components/Input";
import Button from "@/components/Button";
import { createItem } from '../_actions';

export default function TodoAdd() {
    return (
        <form action={createItem} className="w-full flex justify-center gap-x-[8px] desktop:gap-x-[16px]">
            <Input id="name" name="name" placeholder={HOME_TEXT.CREATE_PLACEHOLDER} />
            {/* disabled true: initial */}
            <Button
                disabled={true}
                type="submit"
                Icon={PlusSvg}
                text={HOME_TEXT.CREATE_BUTTON}
                hideMobileText={true}
                bgColor="var(--violet-600)"
                textColor="#fff"
            />
        </form>
    )

}