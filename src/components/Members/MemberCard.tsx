"use client";

interface MemberCardProps {
  name: string;
  description?: string;
  imageUrl: string;
  isExclusive?: boolean;
}

export function MemberCard({
  name,
  description,
  imageUrl,
  isExclusive,
}: MemberCardProps) {
  return (
    <div className=" flex flex-col items-center">
      <div className="relative">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden antialiased ">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full rounded-full object-cover antialiased border-[3px] border-rose-400"
          />
        </div>
        {isExclusive && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs px-2 py-1 rounded">
            exclusive
          </div>
        )}
      </div>
      <h3 className="mt-2 text-sm font-medium text-center">{name}</h3>
      <p className="text-xs text-gray-600 text-center">{description}</p>
    </div>
  );
}
