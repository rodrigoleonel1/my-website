import Image from "next/image";

export default function Avatar() {
  return (
    <figure className="bg-emerald-300 border-emerald-400 border-8 rounded-full shadow-md overflow-hidden hidden md:block col-span-3 dark:border-teal-700 dark:bg-teal-600">
      <Image
        width={250}
        height={250}
        className="h-full "
        src="/avatar.png"
        alt="Rodrigo Alarcón avatar portfolio"
      />
    </figure>
  );
}
