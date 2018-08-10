import React from 'react';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <div className="accordion-panel">
          <div className="accordion-heading" role="tab" id="headingOne">
            <h3 className="card-title accordion-title">
              <a
                className="accordion-msg scale_active"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Lorem Message 1
              </a>
            </h3>
          </div>
          <div
            id="collapseOne"
            className="panel-collapse in collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="accordion-content accordion-desc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-panel">
          <div className="accordion-heading" role="tab" id="headingOne">
            <h3 className="card-title accordion-title">
              <a
                className="accordion-msg scale_active"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Lorem Message 1
              </a>
            </h3>
          </div>
          <div
            id="collapseOne"
            className="panel-collapse in collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="accordion-content accordion-desc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-panel">
          <div className="accordion-heading" role="tab" id="headingOne">
            <h3 className="card-title accordion-title">
              <a
                className="accordion-msg scale_active"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Lorem Message 1
              </a>
            </h3>
          </div>
          <div
            id="collapseOne"
            className="panel-collapse in collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="accordion-content accordion-desc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
