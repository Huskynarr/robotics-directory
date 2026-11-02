let evidenceRequest;

// Search and comparison share one request and one in-memory result per page.
export function loadProductEvidence() {
  if (!evidenceRequest) {
    evidenceRequest = fetch('/comparison-evidence.json')
      .then((response) => {
        if (!response.ok) throw new Error('Product evidence unavailable');
        return response.json();
      })
      .then((evidence) => {
        if (
          !evidence.products ||
          typeof evidence.products !== 'object' ||
          Array.isArray(evidence.products) ||
          !evidence.specifications ||
          typeof evidence.specifications !== 'object' ||
          Array.isArray(evidence.specifications) ||
          !Object.values(evidence.products).every(
            (product) =>
              Array.isArray(product?.highlights) &&
              product.highlights.length &&
              product.highlights.every((text) => typeof text === 'string') &&
              Array.isArray(product.sources),
          )
        )
          throw new Error('Invalid product evidence');
        return evidence;
      })
      .catch((error) => {
        evidenceRequest = undefined;
        throw error;
      });
  }
  return evidenceRequest;
}
