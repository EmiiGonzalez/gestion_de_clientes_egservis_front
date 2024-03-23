import { useEffect, useState } from "react";

export const useVerifiying = () => {
    const [isVerifying, setIsVerifying] = useState(false);

    return [isVerifying, setIsVerifying];
}