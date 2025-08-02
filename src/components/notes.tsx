import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { sortByDate } from "@utils/transform";
import type { MarkdownInstance } from "astro";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Notes: React.FC<{
  data: any;
  withBtnBack?: boolean;
}> = ({ data, withBtnBack }) => {
  useEffect(() => {
    (document.querySelector("body") as HTMLElement).classList.remove(
      "overflow-hidden"
    );
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-8">
      <div className="text-xl font-bold">Catatan</div>
      <div className="flex flex-col gap-4">
        {data.sort(sortByDate).map((item: any, index: number) => (
          <a href={item.path.replace(".md", "")} key={index}>
            <Card
              key={index}
              isPressable
              shadow="sm"
              className="p-4 w-full text-left border border-divider"
              radius="sm"
              // onPress={() => (window.location.href = item.url)}
            >
              <div className="font-bold text-base md:text-lg text-primary">
                {`${
                  item.frontmatter.ustadz ? item.frontmatter.ustadz + " - " : ""
                } ${item.frontmatter.title}`}
              </div>
              <div className="text-gray-400 text-xs">
                {dayjs(item.frontmatter.date).format("DD MMMM YYYY")} oleh{" "}
                {item.frontmatter.author}
              </div>
              <div className="mt-4 text-sm md:text-base">
                {item.frontmatter.description}
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Notes;
