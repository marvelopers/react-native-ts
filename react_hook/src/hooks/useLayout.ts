import { useCallback, useState } from "react"
import { LayoutChangeEvent, LayoutRectangle } from "react-native";

export const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>({ x: 0, y: 0, width: 0, height: 0 });
  const handleLayout = useCallback((e: LayoutChangeEvent) => {
    const { layout } = e.nativeEvent
    setLayout(layout);
  }, []);

  return [layout, handleLayout]
}