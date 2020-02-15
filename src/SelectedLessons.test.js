import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {
  cleanup,
  render,
  fireEvent,
  wait,
  getByText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SelectedLessons from "./SelectedLessons";
import lessonItems from "./all-lessons";
import {} from "./updateSelectedLessons.action";

const mockStore = configureStore([thunk]);

describe("<SelectedLessons /> component", () => {
  let store;
  let rendered;

  beforeEach(() => {
    store = mockStore({
      selectedLessons: {
        isLoading: false,
        data: []
      },
      allLessons: lessonItems
    });
    rendered = render(
      <Provider store={store}>
        <SelectedLessons />
      </Provider>
    );
  });

  it("should render app without crashing", () => {
    expect(rendered.getByText("Lessons List:")).toBeInTheDocument();
  });

  it("should display the correct name for the first item", async () => {
    expect(
      getByText(
        rendered.queryAllByTestId("checkbox-list-item")[0],
        lessonItems[0].name
      )
    ).toBeInTheDocument();
  });

  it("should display the right number of items", () => {
    expect(rendered.queryAllByTestId("checkbox-list-item").length).toBe(
      lessonItems.length
    );
  });

  it("should disable form if the data is being saved", async () => {
    cleanup();
    const storeWithRequestInFlight = mockStore({
      selectedLessons: {
        isLoading: true,
        data: []
      },
      allLessons: lessonItems
    });
    const renderedWithRequestInFlight = render(
      <Provider store={storeWithRequestInFlight}>
        <SelectedLessons />
      </Provider>
    );

    lessonItems.map(({ id }) => {
      expect(
        renderedWithRequestInFlight.queryByTestId(
          `checkbox-list-item-input-${id}`
        )
      ).toBeDisabled();
    });
    expect(rendered.queryByText("Submit")).toBeDisabled();
  });

  it("should disable the submit button if there are no lessons selected", () => {
    expect(rendered.queryByText("Submit")).toBeDisabled();
  });

  it("should enable the submit button if there are any lessons selected", () => {
    fireEvent.click(
      rendered.queryByTestId(`checkbox-list-item-input-${lessonItems[0].id}`)
    );

    wait(() => expect(rendered.queryByText("Submit")).toBeEnabled());
  });
});
