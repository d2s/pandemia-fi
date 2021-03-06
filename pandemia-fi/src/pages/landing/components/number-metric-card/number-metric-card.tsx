import React from "react";
import { Flex, Box, Text } from "rebass";
import Spinner from "../../../../components/spinner";

interface NumberMetricCardProps {
  /** tell whether the data is still getting loaded */
  isLoading?: boolean;
  /** number amount for the metric card */
  metric: number;
  /** description about what the metric is about */
  explainer: string;
}

const numberFormatter = new Intl.NumberFormat("fi-FI", {
  maximumSignificantDigits: 3,
});

const NumberMetricCard = ({
  isLoading,
  metric,
  explainer,
}: NumberMetricCardProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      {isLoading && (
        <Box py={2}>
          <Spinner />
        </Box>
      )}

      {!isLoading && (
        <Text fontSize={[5, 6]} color="text">
          {numberFormatter.format(metric)}
        </Text>
      )}

      <Text fontSize={[2, 2, 2]} color="text">
        {explainer}
      </Text>
    </Flex>
  );
};

export default NumberMetricCard;
