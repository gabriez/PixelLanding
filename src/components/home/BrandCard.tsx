export const BrandCard = ({ brandName }: { brandName: string }) => {
  return (
    <div className="bg-(image:--gradient-card) py-5 px-7 border border-(--primary-color)/50 hover:border-(--primary-color)/80 rounded-md transition">
      <span className="text-(--muted-foreground) text-lg font-medium block text-center">
        {brandName}
      </span>
    </div>
  );
};
