public class IdentityQuote extends MathQuote {
  public IdentityQuote() {
    question = "Indiquer deux nombres dont vous voulez connaître leur identité remarquable : ";
  }

  protected String calculate(int... parameter) {
    StringBuilder result = new StringBuilder();
    int a = parameter[0], b = parameter[1];

    result.append("(")
        .append(a)
        .append(" + ")
        .append(b)
        .append(")² = ")
        .append(a)
        .append("² + 2 x ")
        .append(a)
        .append(" x ")
        .append(b)
        .append(" + ")
        .append(b)
        .append("² = ")
        .append((a + b) * (a + b))
        .append("\n");
    result.append("(")
        .append(a)
        .append(" - ")
        .append(b)
        .append(")² = ")
        .append(a)
        .append("² - 2 x ")
        .append(a)
        .append(" x ")
        .append(b)
        .append(" + ")
        .append(b)
        .append("² = ")
        .append((a - b) * (a - b))
        .append("\n");
    result.append("(")
        .append(a)
        .append(" + ")
        .append(b)
        .append(") x (")
        .append(a)
        .append(" - ")
        .append(b)
        .append(") = ")
        .append(a)
        .append("² - ")
        .append(b)
        .append("² = ")
        .append((a + b) * (a - b))
        .append("\n");
    return result.toString();
  }
}
