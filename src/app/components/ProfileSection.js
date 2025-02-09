import { Input } from "@/components/ui/input";

export default function ProfileSection({ setImagePreview }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-white text-2xl">Profile Pic</h1>
      <Input type="file" id="imageUpload" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
      <label htmlFor="imageUpload" className="text-orange-200 underline cursor-pointer">
        Upload Image
      </label>
    </div>
  );
}
