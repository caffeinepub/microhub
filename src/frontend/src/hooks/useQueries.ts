import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface LeadFormData {
  name: string;
  brandName: string;
  budgetRange: string;
  contactNumber: string;
  email: string;
}

export function useSubmitLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: LeadFormData) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitLead(
        data.name,
        data.brandName,
        data.budgetRange,
        data.contactNumber,
        data.email
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}
