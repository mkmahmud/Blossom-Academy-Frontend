import PageHead from "../../components/Ui/PageHead/PageHead";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";

const Faq = () => {
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: " Is there a 14-days trial?",
      children: (
        <div>
          <p>
            {" "}
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>{" "}
          <p className="my-4">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual languages.
            The new common language will be more simple and regular than the
            existing European languages.
          </p>
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "How much time I will need to learn this app?",
      children: (
        <div>
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>
          <p className="my-4">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual languages.
            The new common language will be more simple and regular than the
            existing European languages
          </p>
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: "   Is there a month-to-month payment option?",
      children: (
        <div>
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>
          <p className="my-4">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual languages.
            The new common language will be more simple and regular than the
            existing European languages
          </p>
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: " What’s the benefits of the Premium Membership?",
      children: (
        <div>
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>
          <p className="my-4">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual languages.
            The new common language will be more simple and regular than the
            existing European languages.
          </p>
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "5",
      label: " How can I cancel my subscription plan?",
      children: (
        <div>
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </p>
          <p className="my-4">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual languages.
            The new common language will be more simple and regular than the
            existing European languages
          </p>
        </div>
      ),
      style: panelStyle,
    },
  ];

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "#f1e8e6",
    borderRadius: token.borderRadiusLG,
    border: "none",
    fontSize: "1.125rem",
  };

  return (
    <div>
      <PageHead subHead="Most frequently asked questions" title="FAQ" />
      <div>
        <div className="mx-4">
          <h2 className="text-extraLarge font-semibold">
            Most frequently asked <br /> questions
          </h2>
          <p className="my-2 text-lg">
            Here are the most frequently asked questions you may check before{" "}
            <br />
            getting started
          </p>
          <div className="mx-6 w-full md:w-2/3 md:mx-auto my-10">
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              style={{ background: token.colorBgContainer }}
              items={getItems(panelStyle)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
