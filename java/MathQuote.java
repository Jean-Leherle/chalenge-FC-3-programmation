import java.util.Scanner;

public abstract class MathQuote {
  String question;

  protected abstract String calculate(int... parameter);

  public boolean quote(){
    try {
      System.out.println(this.question);
      Scanner scanner = new Scanner(System.in);
      String brutAnswer = scanner.nextLine();
      if(brutAnswer== "exit"){
        scanner.close();
        return true;
      }
      String[] answers = brutAnswer.split(" ");
      int[] formatedAnswers = new int[answers.length];
      for(int i = 0; i<answers.length;i++){
        formatedAnswers[i]=Integer.parseInt(answers[i]);
      }
      System.out.println(calculate(formatedAnswers));
      scanner.close();
      return true;
    }catch(Exception exception){
      System.err.println("Erreur de fonctionnement");
      System.err.println(exception);
      return false;
    }
  }
}
