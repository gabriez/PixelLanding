import { AgencyCardRender } from "@/types/Services";
import { IconView } from "../common/IconView";

export const AgencyCard = ({ agencyCard }: AgencyCardRender) => (
  <div
    key={agencyCard.id}
    className="bg-[#181B25] p-5 flex items-center gap-4 rounded-2xl border border-(--primary-color)/50  hover:border-(--primary-color)/40 transition-colors"
  >
    <div className="bg-[#241F3B] p-3 rounded-2xl shrink-0 w-fit h-fit">
      <IconView
        icon={agencyCard.icon}
        className="w-5 h-5 text-(--primary-color)"
      />
    </div>
    <div>
      <p className="text-white  font-(--plus-jakarta-sans)">
        {agencyCard.description}
      </p>
    </div>
  </div>
);
