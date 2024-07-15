import { validateForm } from 'validate.js';

export async function onRequest(request) {
  const formData = await request.formData();
  const validationResults = validateForm(formData);
  return new Response(JSON.stringify(validationResults), {
    headers: { 'Content-Type': 'application/json' },
  });
}