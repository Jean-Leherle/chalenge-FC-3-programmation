public class MultiplicationQuote extends MathQuote {
  public MultiplicationQuote(){
    question = "Quelle table de multiplication souhaitez-vous afficher ?";
  }

  protected String calculate(int... parameter) {
    int number = parameter[0];
    StringBuilder result = new StringBuilder();
    for (int i = 1; i <= 10; i++) {
      int product = number * i;
      result.append(number).append(" x ").append(i).append(" = ").append(product).append("\n");
    }
    return result.toString();
  }
}
