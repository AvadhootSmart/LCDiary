import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes } from "react";

export const ReqInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-02" className="text-lg font-Montserrat">
        URL
        <span className="text-red-400">*</span>
      </Label>
      <Input
        id="input-02"
        placeholder="https://leetcode.com/problems/*"
        type="text"
        required
        className="font-Montserrat"
        {...props}
      />
    </div>
  );
};
