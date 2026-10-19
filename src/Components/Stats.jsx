import Contribute from "./Contribute";
import StatCard from "./StatCard";

export default function Stats({ stars, downloads, issues }) {
  return (
    <div className="flex justify-center gap-6 pb-8">
        <StatCard value={stars} label="Stars" />
        <StatCard value={downloads} label="Downloads" />
        <StatCard value={issues} label="Issues reported" />
        <StatCard value={Contribute} label="Contribute" />
    </div>
    );
}    