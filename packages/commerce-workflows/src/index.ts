type PromotionInput = {
  campaign: string;
  benefit: string;
  region: string;
};

export function buildPromotionMessage(input: PromotionInput) {
  return {
    headline: `${input.campaign}: ${input.benefit}`,
    body: `Available now for customers in ${input.region}. Terms apply at checkout.`
  };
}
