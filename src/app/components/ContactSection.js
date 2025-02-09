import { Input } from "@/components/ui/input";

export default function ContactSection({ cvData, setCvData }) {
  const handleChange = (field) => (e) => {
    setCvData({ ...cvData, [field]: e.target.value });
  };

  return (
    <div className="border-2 border-black p-4 mt-5 rounded-lg">
      <h2 className="text-xl text-white mb-2">Contact Information</h2>
      <Input placeholder="Phone" value={cvData.phone} onChange={handleChange("phone")} className="mb-2" />
      <Input placeholder="Email" value={cvData.email} onChange={handleChange("email")} className="mb-2" />
      <Input placeholder="Address" value={cvData.address} onChange={handleChange("address")} />
    </div>
  );
}
