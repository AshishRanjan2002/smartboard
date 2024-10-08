import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
};



const Hint = ({
    label,
    children,
    side,
    align,
    alignOffset,
    sideOffset
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className="text-white bg-black border-black"
                    side={side}
                    sideOffset={sideOffset}
                    align={align}
                    alignOffset={alignOffset}>
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip> 
        </TooltipProvider>
    );
};

export default Hint