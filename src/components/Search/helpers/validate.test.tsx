import validate from './validate';

describe("validate", () => {
  it("should respond with errors", () => {
    const errorResult = validate({ flyingFrom: '', dateFrom: null, dateTo: null });
    expect(errorResult.hasErrors).toBe(true);
    expect(errorResult.flyingFrom?.text).toBe("The field is required");
    expect(errorResult.dateFrom?.text).toBe("The field is required");
    expect(errorResult.dateTo?.text).toBe("The field is required");
  });
});