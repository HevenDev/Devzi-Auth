import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { lable: "At least 8 characters", met: password.length >= 8 },
    { lable: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { lable: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { lable: "Contains a number", met: /\d/.test(password) },
    { lable: "Contains special character", met: /[!@#$%^&*_]/.test(password) },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item, index) => (
        <div key={index} className="flex items-center text-xs">
          {item.met ? (
            <Check className="size-4 text-emerald-400 mr-2" />
          ) : (
            <X className="size-4 text-red-400 mr-2" />
          )}
          <span className={item.met ? "text-emerald-400" : "text-red-400"}>
            {item.lable}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (pass.match(/[A-Z]/) && pass.match(/[a-z]/)) strength += 1;
    if (pass.match(/[0-9]/)) strength += 1;
    if (pass.match(/[!@#$%^&*_]/)) strength += 1;
    return strength;
  };
  const strength = getStrength(password);

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-orange-500";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-green-500";
    return "bg-emerald-500";
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400">Password Strength</span>
        <span className="text-xs text-gray-400">
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 transition-colors duration-300 rounded-full 
            ${index < strength ? getColor(index) : "bg-gray-400"}`}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
