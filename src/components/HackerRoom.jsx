import { useGLTF } from "@react-three/drei";

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF("/models/coffee.glb");

  // Collect all geometries into an array for iteration
  const geometryKeys = [
    "defaultMaterial",
    "defaultMaterial_1",
    "defaultMaterial_2",
    "defaultMaterial_3",
    "defaultMaterial_4",
    "defaultMaterial_5",
    "defaultMaterial_6",
    "defaultMaterial_7",
    "defaultMaterial_8",
    "defaultMaterial_9",
    "defaultMaterial_10",
    "defaultMaterial_11",
    "defaultMaterial_12",
    "defaultMaterial_13",
    "defaultMaterial_14",
    "defaultMaterial_15",
    "defaultMaterial_16",
    "defaultMaterial_17",
    "defaultMaterial_18",
    "defaultMaterial_19",
    "defaultMaterial_20",
    "defaultMaterial_21",
    "defaultMaterial_22",
    "defaultMaterial_23",
    "defaultMaterial_24",
    "defaultMaterial_25",
    "defaultMaterial_26",
    "defaultMaterial_27",
    "defaultMaterial_28",
    "defaultMaterial_29",
    "defaultMaterial_30",
    "defaultMaterial_31",
    "defaultMaterial_32",
    "defaultMaterial_33",
    "defaultMaterial_34",
    "defaultMaterial_35",
    "defaultMaterial_36",
    "defaultMaterial_37",
    "defaultMaterial_38",
    "defaultMaterial_39",
    "defaultMaterial_40",
    "defaultMaterial_41",
    "defaultMaterial_42",
    "defaultMaterial_43",
  ];

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Iterate over geometries to create mesh components dynamically */}
          {geometryKeys.map((key) => (
            <mesh
              key={key}
              castShadow
              receiveShadow
              geometry={nodes[key].geometry}
              material={materials.Coffee_machine_base}
            />
          ))}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/coffee.glb");
