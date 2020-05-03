import { Errors, ValidationParams } from '../types';

export default function validate({ flyingFrom, dateFrom, dateTo }: ValidationParams) {
  const errors: Errors = {hasErrors: false};
  if (!flyingFrom) {
    errors.hasErrors = true;
    errors.flyingFrom = { text: "The field is required"}
  }
  if (!dateFrom) {
    errors.hasErrors = true;
    errors.dateFrom = { text: "The field is required"}
  }
  if (!dateTo) {
    errors.hasErrors = true;
    errors.dateTo = { text: "The field is required"}
  }
  return errors;
}