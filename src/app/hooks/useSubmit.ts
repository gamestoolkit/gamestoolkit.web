import { useRouter } from "next/navigation";

export const useSubmit = <T>(effect: (m: T) => Promise<void>, redirectTo?: string) => {
  const router = useRouter();  
  const onSubmit = (model: T) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await effect(model);
    if (redirectTo !== undefined) {
      router.push(redirectTo);
    }
  }

  return onSubmit;
}
