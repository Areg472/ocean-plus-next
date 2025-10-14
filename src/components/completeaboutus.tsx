import {
  Cardaboutus,
  CardaboutusContent,
  CardaboutusHeader,
} from "@/components/cardaboutus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CompleteAboutUs({
  color,
  avatar,
  avatarFallback,
  name,
  tagline,
  buttonLink,
  buttonText,
}) {
  return (
    <Cardaboutus
      color={color}
      className="mt-[6px] w-52 basis-full lg:basis-1/4"
    >
      <CardaboutusHeader>
        <Avatar className="w-20 h-20">
          <AvatarImage src={avatar} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <h3 className="mr-1 text-xl">{name}</h3>
        <p>{tagline}</p>
      </CardaboutusHeader>
      <CardaboutusContent>
        <a href={buttonLink} target="_blank">
          <button className="text-white w-20 h-7 cursor-pointer text-sm border border-black bg-black rounded-[20px] text-center transition duration-400">
            {buttonText}
          </button>
        </a>
      </CardaboutusContent>
    </Cardaboutus>
  );
}
