import { Card, CardBody, Image } from "@heroui/react";

const Quote = () => {
  return (
    <Card isBlurred shadow="lg" className="border-none" radius="sm">
      <Image
        alt="quote"
        className="object-cover"
        height={300}
        src="/images/flower2.webp"
        width={"100%"}
      />
      <CardBody className="absolute z-10 top-[80px] sm:top-[130px] text-center">
        <div className="text-2xl md:text-3xl font-bold text-shadow-[0_3px_1px_rgb(0_0_0/_0.6)]">
          Siapa yang menempuh jalan untuk mencari ilmu
        </div>
        <div className="text-shadow-[0_2px_1px_rgb(0_0_0/_0.6)]">
          maka Allah akan mudahkan baginya jalan menuju surga.” (HR. Muslim, no.
          2699)
        </div>
      </CardBody>
    </Card>
  );
};

export default Quote;
