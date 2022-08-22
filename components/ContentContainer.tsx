import clsx from "clsx";

export interface ContentContainerProps
  extends React.ComponentPropsWithoutRef<"section"> {}

export const ContentContainer = ({
  className,
  children,
  ...props
}: ContentContainerProps) => {
  return (
    <div className="w-[100%] ml-auto mr-auto max-w-7xl">
      <section
        className={clsx(
          "py-[40px] px-[24px] md:py-[50px] md:px-[30px] lg:py-[80px] lg:px-[50px] xl:py-[80px] xl:px-[100px]",
          className
        )}
        {...props}
      >
        {children}
      </section>
    </div>
  );
};
