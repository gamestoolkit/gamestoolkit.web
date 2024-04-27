import { useRouter } from "next/navigation";

export const useSubmit = <T>(effect: (m: T) => Promise<void>, checkModel?: () =>boolean, redirectTo?: string) => {
  const router = useRouter();  
  const onSubmit = (model: T) => async (e: React.FormEvent<HTMLFormElement>) => {
    if (checkModel !== undefined) {
      if (!checkModel()) {
        alert("Some fields are required");
        return;
      }
    }
    e.preventDefault();
    await effect(model);
    if (redirectTo !== undefined) {
      router.push(redirectTo);
    }
  }

  return onSubmit;
}
