import styled from "styled-components";
import TerminalBox from "./TerminalBox";
import TicketForm from "./TicketForm";

const TicketBox = styled.section`
  h1 {
    text-align: center;
    font-size: 2em;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 30px;
  }
  article {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    dl {
      border-top: 5px solid #000;
      width: 210px;
      margin-right: 30px;
      dt {
        font-weight: bold;
        font-size: 28px;
      }
      dd {
        color: #666;
      }
    }
    aside {
      width: 100%;
      display: flex;
      div {
        background-color: light;
        width: 50%;
      }
      form {
        width: 100%;
        border: 1px solid #000;
        .travelMode {
          text-align: center;
          width: 500px;
          margin-top: 50px;
          label {
            margin: 0 15px;
          }
        }
        ul {
          padding: 50px 0;
          li {
            padding: 0 90px;
            margin: 20px 0;
            span {
              display: inline-block;
              width: 100px;
              text-align: left;
              line-height: 32px;
            }
            input {
              width: 300px;
              height: 30px;
              padding: 0;
              border-radius: 7px;
              text-indent: 10px;
              &[name="Date"] {
                width: 200px;
              }
            }
            select {
              border-radius: 7px;
              height: 30px;
              &[name="setTime"] {
                width: 90px;
                margin-left: 10px;
              }
              &[name="peoples"] {
                width: 300px;
              }
            }
          }
        }
      }
    }
  }
`;

function Ticketing() {
  return (
    <>
      <TerminalBox />
      <TicketBox>
        <h1>승차권 예매</h1>
        <article>
          <dl>
            <dt>기초 정보 입력</dt>
            <dd>시외버스 예매 시스템으로 안전하고 편리하게 여행하세요.</dd>
          </dl>
          <aside>
            <div>
              <h2>승차권 예매</h2>
              <p>시외버스 예매 시스템으로 안전하고 편리하게 여행하세요.</p>
            </div>
            <TicketForm />
          </aside>
        </article>
      </TicketBox>
    </>
  );
}

export default Ticketing;
