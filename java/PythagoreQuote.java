import java.lang.Math;

public class PythagoreQuote extends MathQuote {
  PythagoreQuote() {
    question = "Indiquer les valeurs des côtés connus du triangle :";
  }

  protected String calculate(int... parameter) {
    Double result = Math.sqrt(Math.pow(parameter[0], 2) + Math.pow(parameter[1], 2));
    return "la longueur du troisiéme coté est " + Double.toString(result);
  }
}
