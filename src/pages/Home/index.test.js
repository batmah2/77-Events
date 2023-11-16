import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours", {}, { timeout: 3000 });
      await screen.findByText("Message envoyé !", {}, { timeout: 3000 });
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
    render(<Home />);
    const events = screen.queryAllByTestId("card-image-testid").length;
      expect (events).toBeGreaterThan(1)
  })
  })
  it("a list a people is displayed", () => {
    // to implement
    render(<Home />)
    const people = screen.queryAllByTestId("people-testid").length;
    expect (people).toBe(6)
  })
  it("a footer is displayed", async () => {
    // to implement
    render(<Home />);
    await screen.findByTestId("footer-testid");
  })
  it("an event card, with the last event, is displayed", async () => {
    // to implement
    render(<Home />);
        screen.findByTestId("lastEvent-testid", { timeout: 3000 });
      });
